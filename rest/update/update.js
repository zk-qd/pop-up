

const popUpdate = function () {


    return {
        pop_update_html:
            `
    <div class='pop-rest-update'>
            <div class='pop-rest-top'>
                <div class='download'>
                    <h3>下载模板</h3>
                    <div>
                        <span class='img-big-equal'></span><em>居住证</em>
                        <button type="button" class="singleFileDownload-button"><span class='img-small-equal'></span>下载</button>
                    </div>
                </div>
                <div class='update'>
                    <h3>上传模板</h3>
                    <div>
                    <span class='img-big-equal'></span><em>居住证</em>
                    <input type="file" class="singleFileUpload-file" style="display: none">
                    <button type="button" class="singleFileUpload-button"><span class='img-small-equal'></span>上传</button>
                    </div>
                </div>
            </div>
            <div class='pop-rest-bottom'>
                <h3>查询进度</h3>
                <div class='pop-progress'>
                    <span class='img-big-equal'></span>
                    <div>
                        <p class='bar progress-bar progress-gradient'></p>
                    </div>
                    <span class='percentage progress-percentage'>0%</span>
                </div>
            </div>
        </div>
    `,
    }
}