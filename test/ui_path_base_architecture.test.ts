import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as UiPathBaseArchitecture from '../lib/ui_path_base_architecture-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new UiPathBaseArchitecture.UiPathBaseArchitectureStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
