// RateLimiter Class - Prevents spam submissions
class RateLimiter {
    constructor() {
        this.storageKey = 'formSubmissions';
        this.maxSubmissions = 3; // Max 3 submissions
        this.timeWindow = 3600000; // 1 hour in milliseconds
    }

    canSubmit() {
        const submissions = this.getSubmissions();
        const now = Date.now();

        // Filter out old submissions (older than time window)
        const recentSubmissions = submissions.filter(
            timestamp => now - timestamp < this.timeWindow
        );

        // Update storage with only recent submissions
        this.saveSubmissions(recentSubmissions);

        // Check if user exceeded limit
        if (recentSubmissions.length >= this.maxSubmissions) {
            const oldestSubmission = Math.min(...recentSubmissions);
            const timeUntilReset = this.timeWindow - (now - oldestSubmission);
            const minutesLeft = Math.ceil(timeUntilReset / 60000);

            return {
                allowed: false,
                minutesLeft: minutesLeft
            };
        }

        return { allowed: true };
    }

    recordSubmission() {
        const submissions = this.getSubmissions();
        submissions.push(Date.now());
        this.saveSubmissions(submissions);
    }

    getSubmissions() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }

    saveSubmissions(submissions) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(submissions));
        } catch (e) {
            console.error('Failed to save submissions');
        }
    }
}

export default RateLimiter;
