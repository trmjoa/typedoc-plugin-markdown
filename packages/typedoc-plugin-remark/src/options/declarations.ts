import { DeclarationOption, ParameterType } from 'typedoc';

/**
 *
 * Each required plugin should be individually installed.
 *
 * Please note options can be passed either as an array of strings or an array of string / options.
 *
 * @example  ["unified-prettier","remark-github", ["remark-toc", { "maxDepth": 3 }] ]
 */
export const remarkPlugins: Partial<DeclarationOption> = {
  help: 'An array of remark plugin names.',
  type: ParameterType.Mixed,
  defaultValue: [],
  validate(value) {
    if (!Array.isArray(value)) {
      throw new Error('remarkPlugins must be an array.');
    }
  },
};
