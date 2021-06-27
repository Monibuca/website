<template>
    <div>
        <h1>
            {{ $t("about.title") }}
        </h1>
        <p>
            {{ $t("about.desc") }}
        </p>
        <div style="background: lightgray">
            <img src="../assets/alipay.png" />
            <img src="../assets/wechat.jpg" />
        </div>
        <Divider> {{ $t("about.sponsor") }}</Divider>
        <Tag color="cyan">Sense</Tag>
        <Tag color="cyan">hshev99</Tag>
        <Tag color="cyan">兵</Tag>
        <Tag color="cyan">Leon</Tag>
        <Tag color="cyan">Jack</Tag>
        <Tag color="cyan">天空</Tag>
        <Tag color="cyan">李亚宁</Tag>
    </div>
</template>
<style scoped>
img {
    width: 300px;
    margin: 30px;
}
</style>