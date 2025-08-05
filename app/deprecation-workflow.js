import setupDeprecationWorkflow from 'ember-cli-deprecation-workflow';

/**
 * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
 */
setupDeprecationWorkflow({
  /**
    false by default, but if a developer / team wants to be more aggressive about being proactive with
    handling their deprecations, this should be set to "true"
  */
  throwOnUnhandled: false,
  "workflow": [
    /* ... handlers ... */
    /* to generate this list, run your app for a while (or run the test suite),
     * and then run in the browser console:
     *
     *    deprecationWorkflow.flushDeprecations()
     *
     * And copy the handlers here
     */
    /* example: */
    /* { handler: 'silence', matchId: 'template-action' }, */
    {
      "handler": "silence",
      "matchId": "deprecate-import-libraries-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-rsvp-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-version-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-array-proxy-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-namespace-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-action-handler-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-controller-mixin-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-core-object-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-application-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-mutable-array-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-mutable-enumerable-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-native-array-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-component-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-observable-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-evented-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-promise-proxy-mixin-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-service-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-object-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-object-proxy-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-computed-property-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-meta-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-get-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-set-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-computed-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import--capture-render-tree-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import---loader-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-env-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-a-from-ember"
    },
    {
      "handler": "silence",
      "matchId": "deprecate-import-guid-for-from-ember"
    }
  ]
});
