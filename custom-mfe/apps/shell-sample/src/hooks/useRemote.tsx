import { ComponentType, Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { registerRemotes, loadRemote } from '@module-federation/runtime';

export type RemoteDetails = {
  scope: string;
  module: string;
};

export async function loadRemoteFromConfigService(scope: string): Promise<string> {

  // Here, we could hit some external service to get out federated config
  const remoteMap: Record<string, string> = {
    "products": "http://localhost:4201/mf-manifest.json",
  }
  return Promise.resolve(remoteMap[scope]);
}

export default function useRemote({ scope, module }: RemoteDetails) {
  const LazyComponent = lazy(async () => {
    const remoteUrl = await loadRemoteFromConfigService(scope);

    registerRemotes([
      { name: scope, entry: remoteUrl },
    ]);

    return await loadRemote(`${scope}/${module}`) as unknown as Promise<{default: ComponentType<unknown>}>;
  });

  return (props: any) => (
    <ErrorBoundary 
      fallback={<div>Ut oh!</div>}
      onError={(error) => console.log(`Error: There is some error to loadremote from ${scope}/${module}`)}
    >
      <Suspense fallback={<div>Loading..</div>}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}


/** Learning Tips
 * Pros: 
 *  - This gives us a lot of flexibility;
 *  - This became possible loads remotes on demand
 * 
 * Cons:
 *  - This brings more complexity
 *  - More scenarios to worry about
 * */ 