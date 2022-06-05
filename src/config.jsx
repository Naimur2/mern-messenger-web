const config = {
    API_ADDRESS: "http://localhost:7000",
    PEER_CONFIG: {
        host: "localhost",
        port: 7001,
        path: "/peer",
        secure: false,
        config: {
            iceServers: [
                {
                    url: "turn:192.168.0.103:7000",
                    username: "naimur",
                    credential: "naimur",
                    credentialType: "password",
                },
                { url: "stun:192.168.0.101:7000" },
            ],
        },
    },
};

export default config;
