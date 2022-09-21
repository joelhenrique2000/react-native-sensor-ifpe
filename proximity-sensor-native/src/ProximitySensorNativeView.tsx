import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ProximitySensorNativeViewProps } from './ProximitySensorNative.types';

const NativeView: React.ComponentType<ProximitySensorNativeViewProps> =
  requireNativeViewManager('ProximitySensorNative');

export default function ProximitySensorNativeView(props: ProximitySensorNativeViewProps) {
  return <NativeView name={props.name} />;
}
