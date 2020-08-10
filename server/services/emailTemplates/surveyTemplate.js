const keys = require('../../config/keys');

module.exports = (survey) => { //HTML that will be displayed inside of an email.
    return `
        <html>
        <body>
            <div style="text-align: center;">
                <h3>We need your feedback!</h3>
                <p>Please answer the following survey question:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
            </div>
        </body>
        </html>
    `;
};
