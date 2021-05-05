<template>
    <div>
        <img src="../assets/logo.png" style="width: 256px" />
        <div>
            <p>Monibuca(m7s) {{ $t("slogan") }}</p>
            <div style="margin: 10px">{{ $t("slogan2") }}</div>
            <ButtonGroup>
                <Button type="success" target="_blank" to="/linux.tgz">
                    <Icon type="logo-tux" />下载Linux版
                </Button>
                <Button type="success" target="_blank" to="/windows.tgz">
                    <Icon type="logo-windows" />下载Windows版
                </Button>
                <Button type="success" target="_blank" to="/mac.tgz">
                    <Icon type="logo-apple" />下载Mac版
                </Button>
            </ButtonGroup>
            <span style="margin: 0 10px"></span>
            <Button
                type="default"
                target="_blank"
                to="https://github.com/langhuihui/monibuca"
            >
                <svg
                    style="vertical-align: text-top"
                    width="16"
                    height="16"
                    aria-labelledby="simpleicons-github-dark-icon"
                    lang
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title id="simpleicons-github-dark-icon" lang="en">
                        GitHub Dark icon
                    </title>
                    <path
                        fill="#7F8C8D"
                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                </svg>
                GITHUB
            </Button>
            <span style="margin: 0 10px"></span>
            <Button
                target="_blank"
                to="https://live.oschina.net/detail/l_5ec359168fca5_6CA0rArq/4?fromH5=true"
                >直播回顾</Button
            >
            <span style="margin: 0 10px"></span>
            <Button
                target="_blank"
                to="https://www.infoq.cn/article/uiPl8dIuQmhipKb3q3Tz"
                >Info文章</Button
            >
        </div>
        <Row style="margin: 30px">
            <Col span="6" v-for="n in 4" :key="n">
                <Card :bordered="false" style="margin: 30px">
                    <div slot="title" class="feature-title">
                        {{ $t("feature.title" + n) }}
                    </div>
                    <div>{{ $t("feature.feature" + n) }}</div>
                </Card>
            </Col>
        </Row>
        <div id="content">
            <div
                :id="'shadow' + (16 - n)"
                v-for="n in 15"
                :key="n"
                class="shadow"
            ></div>
            <div :id="'gear' + (16 - m)" v-for="m in 15" :key="m + 16"></div>
        </div>
        <Tabs type="card">
            <TabPane label="single">
                Publisher Plugins:
                <CheckboxGroup v-model="publishers">
                    <Checkbox label="rtmp" border></Checkbox>
                    <Checkbox label="rtsp" border></Checkbox>
                    <Checkbox label="hls" border></Checkbox>
                    <Checkbox label="ts" border></Checkbox>
                    <Checkbox label="record" border></Checkbox>
                    <Checkbox label="webrtc" border></Checkbox>
                    <Checkbox label="gb28181" border></Checkbox>
                </CheckboxGroup>
                Subscribers Plugins:
                <CheckboxGroup v-model="subscribers">
                    <Checkbox label="rtmp" border></Checkbox>
                    <Checkbox label="jessica" border></Checkbox>
                    <Checkbox label="hdl" border></Checkbox>
                    <Checkbox label="record" border></Checkbox>
                    <Checkbox label="hls" border></Checkbox>
                    <Checkbox label="gateway" border></Checkbox>
                    <Checkbox label="webrtc" border></Checkbox>
                </CheckboxGroup>
                <struct
                    :selectedPubs="publishers"
                    :selectedSubs="subscribers"
                />
            </TabPane>
            <TabPane label="cluster">
                <cluster />
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
import struct from "../components/struct";
import cluster from "../components/cluster";
export default {
    data() {
        return {
            publishers: ["rtmp", "rtsp", "hls", "ts", "record", "webrtc"],
            subscribers: [
                "rtmp",
                "jessica",
                "hdl",
                "record",
                "hls",
                "gateway",
                "webrtc",
            ],
        };
    },
    components: {
        struct,
        cluster,
    },
};
</script>

<style scoped>
@import url("../assets/zzsc.css");
.feature-title {
    color: #ff2351;
    font-weight: bold;
    font-size: larger;
}
p {
    font-size: 20px;
}
</style>
