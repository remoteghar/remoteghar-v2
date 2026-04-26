import { build } from 'vite';

try {
  const result = await build();
  console.log('Build successful');
} catch (e) {
  console.error('Build failed with error:');
  console.error('Message:', e.message);
  console.error('Stack:', e.stack);
  console.error('Plugin:', e.plugin);
  if (e.errors) {
    console.error('Detailed Errors:', JSON.stringify(e.errors, null, 2));
  }
}
