Package.describe({
    summary: 'Holder uses SVG to render image placeholders entirely in browser.',
    version: '2.9.9',
    name: 'okingiboy:holder',
    git: 'https://github.com/okingiboy/holder.git',
});

Package.onUse(function(api) {
    api.versionsFrom('0.9.0');
    api.export('Holder', 'client');
    api.addFiles('holder.js', 'client');
});
