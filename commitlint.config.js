module.exports={

    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum':[
            2,
            'always',
            ['build', 'chore', 'ci', 'docs', 'imporovement', 'feat', 'fix', 'perf', 'refactor', 'style', 'revert', 'test']
        ]
    }

}