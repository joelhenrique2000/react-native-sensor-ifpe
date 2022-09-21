import * as React from 'react';

import { ProximitySensorNativeViewProps } from './ProximitySensorNative.types';

function ProximitySensorNativeWebView(props: ProximitySensorNativeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

export default ProximitySensorNativeWebView;
