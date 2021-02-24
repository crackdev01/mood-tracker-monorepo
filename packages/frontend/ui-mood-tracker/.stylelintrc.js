module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-rational-order"],
  "ignoreFiles": ["**/dist/**", "**/.yarn/**"],
  "plugins ": ["stylelint-config-standard", "stylelint-order"],
  "rules": {
    "at-rule-no-unknown": null,
    "block-opening-brace-space-before": null,
    "function-linear-gradient-no-nonstandard-direction": null,
    "no-descending-specificity": null,
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-alphabetical-order": true,
    "plugin/rational-order": [false],
    "rule-empty-line-before": null,
    "selector-list-comma-newline-after": null
  }
}
