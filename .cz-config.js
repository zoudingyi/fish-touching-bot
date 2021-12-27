module.exports = {
  types: [
    {
      value: ":construction: WIP",
      name: "💪 WIP:      正在编写中的代码",
    },
    {
      value: ":sparkles: feat",
      name: "✨ feat:     新功能",
    },
    {
      value: ":bug: fix",
      name: "🐛 fix:      修复问题(bug)",
    },
    {
      value: ":hammer: refactor",
      name: "🔨 refactor: 某个已有功能重构",
    },
    {
      value: ":performing_arts: perf",
      name: "🎭 perf:     改进性能的代码更改",
    },
    {
      value: ":pencil: docs",
      name: "📝 docs:     文档修改",
    },
    {
      value: ":dart: ui",
      name: "🎯 ui:       更新UI和样式文件",
    },
    {
      value: ":art: style",
      name: "🎨 style:    不影响代码含义的更改(空白、格式、缺少分号等)",
    },
    {
      value: ":books: chore",
      name: "📚 chore:    不修改src或测试文件的更改。 比如更新构建任务，包管理器",
    },
    {
      value: ":white_check_mark: test",
      name: "✅ test:     添加缺失的测试或纠正现有的测试",
    },
    {
      value: ":rewind: revert",
      name: "⏪ revert:   Revert to a commit",
    },
    {
      value: ":package: dep_up",
      name: "📦 Updating compiled files or packages.",
    },
    {
      value: ":green_heart: fixci",
      name: "💚 Fixing CI Build.",
    },
    {
      value: ":truck: mv",
      name: "🚚 Moving or renaming files.",
    },
    {
      value: ":fire: prune",
      name: "🛸 Removing code or files.",
    },
    {
      value: ":bookmark: release",
      name: "🔖 Releasing / Version tags.",
    },
    {
      value: ":rocket: first release",
      name: "🚀 first releast!",
    },
  ],

  scopes: [],

  // messages: {
  //   type: "Select the type of change that you're committing:",
  //   scope: '\nDenote the SCOPE of this change (optional):',
  //   // used if allowCustomScopes is true
  //   customScope: 'Denote the SCOPE of this change:',
  //   subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
  //   body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
  //   breaking: 'List any BREAKING CHANGES (optional):\n',
  //   footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
  //   confirmCommit: 'Are you sure you want to proceed with the commit above?',
  // },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
