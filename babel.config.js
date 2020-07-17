module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry',
        'modules': false,
        'corejs': { 'version': 3, 'proposals': true }
      }
    ],
    '@babel/preset-react',
  ],
  'plugins': [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-class-properties',
    [ 'module-resolver',
      {
        'root': ['./src'],
        'alias': {
          'nvm': './src/nvm',
          'volta': './src/volta'
        }
      }
    ],
    'transform-class-properties',
    [ 'styled-components',
      {
        'displayName': true,
        'fileName': false
      }
    ]
  ],
  'env': {

    'test': {
      'presets': [
        [
          '@babel/preset-env',
          {
            'targets': {
              'node': 'current'
            }
          }
        ]
      ],
      'sourceMaps': true,
      'retainLines': true
    },

    'development': {
      'plugins': [
      ]
    },

    'production': {
      'plugins': [
      ]
    }
  }
}
