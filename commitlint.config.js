module.exports = { 
    extends: ['gitmoji'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'refactor', 'perf', 'test', 'ci', 'build', 'chore', 'wip', 'version']],
        'subject-case': [2, 'never'],
        'subject-min-length': [2, 'always', [15]],        
        'references-empty': [2, 'never']
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ['ATV-', 'v-']
        }
    },
}
