const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '9000',
    Meta_WA_accessToken:
        'EAAKBQIWASUwBAIo9XGr0sA6bZCHPxh36U8KP8WxeHZAZCfIEptDZBYVsDlTxJT7jX3i10tTtjQVtmq4tSJZB2AiPWfPjqHZAVdWnxOZBbFcw7vGaAB4KcsKdts2e0AWvAj31S3005CZCgEzNzovbqsz61sUR74Flt1t4g9sPAwflaKFu48S1HRlPiWzFeqRP0w9ZC7AgkEZAmXQ6br2qrKD2wU',
    Meta_WA_SenderPhoneNumberId: '101580936177175',
    Meta_WA_wabaId: '104193235911486',
    Meta_WA_VerifyToken: '12345',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    return development;
    // if (environment === 'production') {
    //     return production;
    // } else if (environment === 'development') {
    //     return development;
    // } else {
    //     return fallback;
    // }
};
