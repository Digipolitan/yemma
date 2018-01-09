module.exports = app => app.router.set('trust proxy', () => app.settings.policies.trust);
