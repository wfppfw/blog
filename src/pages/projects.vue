<template>
    <div class="projects">
        <div class="container">
            <aside>
                <nav>
                    <div></div>
                    <ul>
                        <li><a>1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                        <li><a>1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                        <li><a>4</a></li>
                        <li><a>1</a></li>
                        <li><a>2</a></li>
                        <li><a>3</a></li>
                    </ul>
                </nav>
            </aside>
            <main>
                <div>
                    <div>
                        <div class="Headr"></div>
                        <section>
                            <ul>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                                <li><a>1</a></li>
                                <li><a>2</a></li>
                                <li><a>3</a></li>
                                <li><a>4</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.projects {
    box-sizing: border-box;
    position: relative;
}
.container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
}
aside {
    nav {
        overflow-y: auto;
        position: sticky;
        top: calc(var(--nav-height) + 2rem);
        ul {
            font-size: 0.9rem;
            list-style: none;
            padding-left: 0;
            margin: 0 0 1rem;
            li {
                margin-top: 0.7rem;
                a {
                    text-decoration: none;
                    display: block;
                    color: #1c1e21;
                }
            }
        }
    }
    flex: 0 0 10%;
    background-color: red;
}
main {
    flex: 0 0 90%;
    background-color: blue;
}
</style>
