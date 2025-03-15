import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['public', 'dist', 'node_modules', 'build'],
  formatters: true,
  react: true,
  typescript: {
    tsconfig: './tsconfig.json',
  },
  lessOpinionated: true,
})
