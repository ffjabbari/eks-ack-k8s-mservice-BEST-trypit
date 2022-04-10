// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * Custom Resource Definition for applying security groups to pods
 *
 * @schema SecurityGroupPolicy
 */
export class SecurityGroupPolicy extends ApiObject {
  /**
   * Returns the apiVersion and kind for "SecurityGroupPolicy"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'vpcresources.k8s.aws/v1beta1',
    kind: 'SecurityGroupPolicy',
  }

  /**
   * Renders a Kubernetes manifest for "SecurityGroupPolicy".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: SecurityGroupPolicyProps = {}): any {
    return {
      ...SecurityGroupPolicy.GVK,
      ...toJson_SecurityGroupPolicyProps(props),
    };
  }

  /**
   * Defines a "SecurityGroupPolicy" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: SecurityGroupPolicyProps = {}) {
    super(scope, id, {
      ...SecurityGroupPolicy.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...SecurityGroupPolicy.GVK,
      ...toJson_SecurityGroupPolicyProps(resolved),
    };
  }
}

/**
 * Custom Resource Definition for applying security groups to pods
 *
 * @schema SecurityGroupPolicy
 */
export interface SecurityGroupPolicyProps {
  /**
   * @schema SecurityGroupPolicy#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * SecurityGroupPolicySpec defines the desired state of SecurityGroupPolicy
   *
   * @schema SecurityGroupPolicy#spec
   */
  readonly spec?: SecurityGroupPolicySpec;

}

/**
 * Converts an object of type 'SecurityGroupPolicyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityGroupPolicyProps(obj: SecurityGroupPolicyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_SecurityGroupPolicySpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * SecurityGroupPolicySpec defines the desired state of SecurityGroupPolicy
 *
 * @schema SecurityGroupPolicySpec
 */
export interface SecurityGroupPolicySpec {
  /**
   * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
   *
   * @schema SecurityGroupPolicySpec#podSelector
   */
  readonly podSelector?: SecurityGroupPolicySpecPodSelector;

  /**
   * GroupIds contains the list of security groups that will be applied to the network interface of the pod matching the criteria.
   *
   * @schema SecurityGroupPolicySpec#securityGroups
   */
  readonly securityGroups?: SecurityGroupPolicySpecSecurityGroups;

  /**
   * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
   *
   * @schema SecurityGroupPolicySpec#serviceAccountSelector
   */
  readonly serviceAccountSelector?: SecurityGroupPolicySpecServiceAccountSelector;

}

/**
 * Converts an object of type 'SecurityGroupPolicySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityGroupPolicySpec(obj: SecurityGroupPolicySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'podSelector': toJson_SecurityGroupPolicySpecPodSelector(obj.podSelector),
    'securityGroups': toJson_SecurityGroupPolicySpecSecurityGroups(obj.securityGroups),
    'serviceAccountSelector': toJson_SecurityGroupPolicySpecServiceAccountSelector(obj.serviceAccountSelector),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 *
 * @schema SecurityGroupPolicySpecPodSelector
 */
export interface SecurityGroupPolicySpecPodSelector {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   *
   * @schema SecurityGroupPolicySpecPodSelector#matchExpressions
   */
  readonly matchExpressions?: SecurityGroupPolicySpecPodSelectorMatchExpressions[];

  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @schema SecurityGroupPolicySpecPodSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Converts an object of type 'SecurityGroupPolicySpecPodSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityGroupPolicySpecPodSelector(obj: SecurityGroupPolicySpecPodSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchExpressions': obj.matchExpressions?.map(y => toJson_SecurityGroupPolicySpecPodSelectorMatchExpressions(y)),
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * GroupIds contains the list of security groups that will be applied to the network interface of the pod matching the criteria.
 *
 * @schema SecurityGroupPolicySpecSecurityGroups
 */
export interface SecurityGroupPolicySpecSecurityGroups {
  /**
   * Groups is the list of EC2 Security Groups Ids that need to be applied to the ENI of a Pod.
   *
   * @schema SecurityGroupPolicySpecSecurityGroups#groupIds
   */
  readonly groupIds?: string[];

}

/**
 * Converts an object of type 'SecurityGroupPolicySpecSecurityGroups' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityGroupPolicySpecSecurityGroups(obj: SecurityGroupPolicySpecSecurityGroups | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupIds': obj.groupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 *
 * @schema SecurityGroupPolicySpecServiceAccountSelector
 */
export interface SecurityGroupPolicySpecServiceAccountSelector {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   *
   * @schema SecurityGroupPolicySpecServiceAccountSelector#matchExpressions
   */
  readonly matchExpressions?: SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions[];

  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
   *
   * @schema SecurityGroupPolicySpecServiceAccountSelector#matchLabels
   */
  readonly matchLabels?: { [key: string]: string };

}

/**
 * Converts an object of type 'SecurityGroupPolicySpecServiceAccountSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityGroupPolicySpecServiceAccountSelector(obj: SecurityGroupPolicySpecServiceAccountSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'matchExpressions': obj.matchExpressions?.map(y => toJson_SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions(y)),
    'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 *
 * @schema SecurityGroupPolicySpecPodSelectorMatchExpressions
 */
export interface SecurityGroupPolicySpecPodSelectorMatchExpressions {
  /**
   * key is the label key that the selector applies to.
   *
   * @schema SecurityGroupPolicySpecPodSelectorMatchExpressions#key
   */
  readonly key: string;

  /**
   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   *
   * @schema SecurityGroupPolicySpecPodSelectorMatchExpressions#operator
   */
  readonly operator: string;

  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   *
   * @schema SecurityGroupPolicySpecPodSelectorMatchExpressions#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SecurityGroupPolicySpecPodSelectorMatchExpressions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityGroupPolicySpecPodSelectorMatchExpressions(obj: SecurityGroupPolicySpecPodSelectorMatchExpressions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'operator': obj.operator,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 *
 * @schema SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions
 */
export interface SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions {
  /**
   * key is the label key that the selector applies to.
   *
   * @schema SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions#key
   */
  readonly key: string;

  /**
   * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   *
   * @schema SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions#operator
   */
  readonly operator: string;

  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   *
   * @schema SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions#values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions(obj: SecurityGroupPolicySpecServiceAccountSelectorMatchExpressions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'operator': obj.operator,
    'values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

