import type { TextlintRuleModule } from "@textlint/types";

const report: TextlintRuleModule = (context) => {
    const { Syntax, RuleError, report, getSource, locator } = context;
    return {
        [Syntax.Paragraph](node) {
            // "Paragraph" node
            const text = getSource(node); // Get text
            if (/^([*_]).*\1$/.test(text)) {
                const ruleError = new RuleError("Found bugs.", {
                    padding: locator.at(0)
                });
                report(node, ruleError);
            }
        }
    };
};

export default report;
