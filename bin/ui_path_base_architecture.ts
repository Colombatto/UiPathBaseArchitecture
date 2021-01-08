#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { UiPathBaseArchitectureStack } from '../lib/ui_path_base_architecture-stack';

const app = new cdk.App();
new UiPathBaseArchitectureStack(app, 'UiPathBaseArchitectureStack');
