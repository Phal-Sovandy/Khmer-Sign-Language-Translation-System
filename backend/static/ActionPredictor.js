export class ActionPredictor {
    constructor(convertsPathOrObject) {
        if (typeof convertsPathOrObject === "string") {
            // Load JSON from server (browser fetch)
            fetch(convertsPathOrObject)
                .then(res => res.json())
                .then(data => this.converts = data);
        } else {
            this.converts = convertsPathOrObject;
        }
    }

    async load() {
        const res = await fetch(this.path);
        this.converts = await res.json();
    }

    predict(frames){
        const counts = {};
        for (const f of frames) counts[f] = (counts[f] || 0) + 1;
        let best = null, max = 0;
        for (const [k, v] of Object.entries(counts)) {
            if (v > max) { max = v; best = k; }
        }
        if (max / frames.length >= 0.6) return best;
        return null;
    }

    removeDuplicates(arr) {
        const seen = new Set();
        return arr.filter(x => !seen.has(x) && seen.add(x));
    }

    actionSetToText(actionSet) {
        if (!this.converts) return null;

        const cleanSet = new Set(actionSet);
        let lastMatch = null;

        for (const [text, actions] of Object.entries(this.converts)) {
            const actionClean = new Set(actions.filter(a => a));

            // Check if every item in cleanSet exists in actionClean
            const isSubset = [...cleanSet].every(a => actionClean.has(a));

            if (isSubset) {
                lastMatch = text; // store last matching text
            }
        }

        return lastMatch; // return last matched text or null
    }

}
