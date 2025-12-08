class ActionPredictor {
    /**
     * Initialize the predictor with a converts mapping JSON file
     * @param {string|object} converts - Path to converts.json or an object
     */
    constructor(converts) {
        if (typeof converts === "string") {
            this.converts = JSON.parse(fs.readFileSync(converts, "utf-8"));
        } else if (typeof converts === "object") {
            this.converts = converts;
        } else {
            throw new Error("converts must be a file path or object");
        }
    }

    /**
     * Predict actions from messy frame predictions using a sliding window
     * @param {string[]} predictedFrames
     * @param {number} windowSize
     * @param {number} threshold
     * @param {number} step
     * @returns {string[]} Array of predicted actions
     */
    predictActionsFromFrames(predictedFrames, windowSize = 5, threshold = 0.6, step = 5) {
        const actions = [];
        let i = 0;

        while (i < predictedFrames.length) {
            const window = predictedFrames.slice(i, i + windowSize);
            if (window.length === 0) break;

            // Count occurrences
            const counts = {};
            for (const f of window) counts[f] = (counts[f] || 0) + 1;

            // Find most common
            let mostCommon = null;
            let maxCount = 0;
            for (const [key, value] of Object.entries(counts)) {
                if (value > maxCount) {
                    mostCommon = key;
                    maxCount = value;
                }
            }

            if (maxCount / window.length >= threshold) actions.push(mostCommon);

            i += step;
        }

        return actions;
    }

    /**
     * Convert a cleaned set of actions back to text using converts.json
     * @param {string[]} actionSet
     * @returns {string|null} Matching text or null
     */
    actionSetToText(actionSet) {
        const actionSetClean = new Set(actionSet);
        for (const [text, actions] of Object.entries(this.converts)) {
            const actionsClean = new Set(actions.filter(a => a));
            if (
                actionSetClean.size === actionsClean.size &&
                [...actionSetClean].every(a => actionsClean.has(a))
            ) {
                return text;
            }
        }
        return null;
    }

    /**
     * Remove duplicates while preserving order
     * @param {string[]} arr
     * @returns {string[]}
     */
    removeDuplicates(arr) {
        const seen = new Set();
        const result = [];
        for (const item of arr) {
            if (!seen.has(item)) {
                seen.add(item);
                result.push(item);
            }
        }
        return result;
    }
}

// Export the class for Node.js
export default ActionPredictor;