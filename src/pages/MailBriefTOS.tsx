import "./legal.css"

export default function MailBriefTOS() {
    return (
        <body>
            <header className="legal-header">
            <nav className="legal-width" aria-label="MailBrief">
                <a href="/mail-brief/" className="legal-brand"><img alt="" src="/mail-brief/app-icon.webp" width="36" height="36" /> MailBrief</a>
                <a href="/mail-brief/privacy/">Privacy Policy</a>
            </nav>
            </header>
            <main className="legal-width">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <p className="legal-date text-md">Effective <time datetime="2026-11-15">November 15, 2026</time></p>
            <br/>
            <p className="text-md">These terms apply to your use of MailBrief, a Gmail client for iPhone and iPad provided by cogworkAI. By using MailBrief, you agree to these terms. If you connect an account managed by an organization, you must have authority to use the account with MailBrief and follow your organization’s rules.</p>
            <br/>
            <h2 className="text-xl font-bold">Connecting Gmail</h2>
            <p className="text-md">MailBrief can display and organize mail, generate summaries and briefings, and perform actions you request, such as sending or archiving messages. Google controls which permissions you grant and can restrict or revoke access. You can sign out of Gmail in MailBrief or revoke access in <a href="https://myaccount.google.com/connections">Google Account connections</a>.</p>
            <br/>
            <p className="text-md">You retain your rights in your content. Authorization through Google lets MailBrief handle your Gmail data within the permissions you grant, the practices described in the <a href="/mailbrief/privacy/">Privacy Policy</a>, and Google’s Limited Use requirements. Gmail permissions and consent to new uses of your Gmail data are requested separately from acceptance of these terms. Gmail is a Google service and its own terms apply when you use it.</p>
            <br/>
            <h2 className="text-xl font-bold">Acceptable use</h2>
            <p className="text-md">Use MailBrief lawfully and only with accounts and data you are authorized to access. Do not use it to send spam, phish, distribute malware, harvest other people’s information, bypass Gmail limits or abuse protections, or interfere with MailBrief, Gmail, or others’ accounts. Keep your device, Google account, and provider credentials secure.</p>
            <br/>
            <h2 className="text-xl font-bold">Optional AI and third-party services</h2>
            <p className="text-md">You may choose to process email on your device or configure an external AI service. An external service may receive email content as described in the <a href="/mailbrief/privacy/">Privacy Policy</a> and may charge you under its own terms. If you enable external processing, use a service and settings that permit private email processing, prohibit training or improving generalized models on Gmail data, and meet Google’s restrictions on human access and onward transfer. If you cannot verify those conditions, use on-device processing and disable remote classification.</p>
            <br/>
            <p className="text-md">Summaries, classifications, and extracted order or offer details can be wrong or incomplete. Check the original message before relying on them for a deadline, payment, delivery, or other consequential action.</p>
            <br/>
            <h2 className="text-xl font-bold">Availability and ending use</h2>
            <p className="text-md">MailBrief depends on device and network availability and on services such as Gmail and Apple notifications. Sync, briefings, and notifications may be delayed or unavailable.</p>
            <br/>
            <p className="text-md">You may stop using MailBrief at any time. Follow the <a href="/mailbrief/privacy/">Privacy Policy</a> for sign-out, revocation, and deletion. We may restrict access to protect users or the service, address abuse, or comply with law. We will post updates to these terms here and give notice of material changes where required.</p>
            <br/>
            <h2 className="text-xl font-bold">Contact and your rights</h2>
            <p className="text-md">For support or questions about these terms, email <a href="mailto:info@cogworkai.com?subject=MailBrief%20terms">info@cogworkai.com</a>. You retain all rights and remedies that applicable law makes non-waivable.</p>
            </main>
        </body>
    )
}