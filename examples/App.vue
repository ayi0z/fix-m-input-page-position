<template>
    <div id="app">
        <h3>测试：</h3>
        <p>在手机浏览此页面，</p>
        <p>调用输入法后，</p>
        <p>页面上移无法自动恢复的bug：</p>text input:
        <br>
        <input type="text">
        <br>
        <br>select:
        <br>
        <select>
            <option v-for="op in ops" :key="op" :value="op">{{`option ${op}`}}</option>
        </select>
        <br>
        <br>textarea:
        <br>
        <textarea name id cols="30" rows="10"></textarea>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            ops: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        };
    }
};
</script>
