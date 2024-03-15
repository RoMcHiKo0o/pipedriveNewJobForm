const sdk = new PipedriveAppExtensionsSDK({ id: '3dc5ad239a3716b9' });

sdk.init()
  .then(() => {
    console.log('SDK initialized successfully!');
  })
  .catch((error) => {
    console.error('Error initializing SDK:', error);
  });