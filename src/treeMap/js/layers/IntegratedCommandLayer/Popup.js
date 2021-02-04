export default {
    riskMap(data) {
        const html = `
            <div class="riskMapBox">
                <div class="chartsBox">
                    <div class="charts">
                        <div class="chart" id="riskMap1"></div>
                    </div>
                    <div class="zz"></div>
                </div>
                <div class="infoBox">
                    <div class="close">×</div>
                    <div class="title">诊断分级单位数</div>
                    <div class="content">
                        <div class="item">
                            <span class="name" style="color:#ff9191;">高风险</span>
                            <span class="num">${data[0].value}</span>
                            <span class="unit">家</span>
                        </div>
                        <div class="item">
                            <span class="name" style="color:#ffcf70;">中风险</span>
                            <span class="num">${data[1].value}</span>
                            <span class="unit">家</span>
                        </div>
                        <div class="item">
                            <span class="name" style="color:#4eed9e;">低风险</span>
                            <span class="num">${data[2].value}</span>
                            <span class="unit">家</span>
                        </div>
                    </div>
                </div>
            </div>
        `


        return html
    }

}