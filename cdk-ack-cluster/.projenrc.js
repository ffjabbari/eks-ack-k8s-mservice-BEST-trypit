const {
  awscdk
} = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.21.1',
  github: false,
  defaultReleaseBranch: 'main',
  name: 'cdk8s-ack-image-resizer',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    'cdk8s',
    'cdk8s-cli',
    '@kubernetes/client-node',
  ],
  /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

cdk8sImportTask = project.addTask('cdk8s:import');
// cdk8sImportTask.
project.gitignore.exclude(
  '**/build/',
  '**/.gradle',
  '**/__snapshots',
  '.DS_Store',
  'cdk.context.json',
);

project.synth();