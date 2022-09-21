import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ProximitySensorNative.web.ts
// and on native platforms to ProximitySensorNative.ts
import {
  ChangeEventPayload,
  ProximitySensorNativeViewProps,
} from "./ProximitySensorNative.types";
import ProximitySensorNative from "./ProximitySensorNativeModule";
import ProximitySensorNativeView from "./ProximitySensorNativeView";

// Get the native constant value.
export const PI = ProximitySensorNative.PI;

export function hello(): string {
  return ProximitySensorNative.hello();
}

export async function setValueAsync(value: string) {
  return await ProximitySensorNative.setValueAsync(value);
}

// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.ProximitySensorNative is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(
  NativeModulesProxy.ProximitySensorNative ?? ProximitySensorNative
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export {
  ProximitySensorNativeView,
  ProximitySensorNativeViewProps,
  ChangeEventPayload,
};
