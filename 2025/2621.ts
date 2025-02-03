namespace Sleep {
    const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

    // Example usage
    sleep(2000).then(() => console.log('2 seconds have passed'));
}