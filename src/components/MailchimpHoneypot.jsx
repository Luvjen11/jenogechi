import { MAILCHIMP_HONEYPOT_NAME } from "@/lib/mailchimp";

/** Hidden field required by Mailchimp to reduce bot signups */
export default function MailchimpHoneypot() {
  return (
    <div
      aria-hidden="true"
      className="mc-honeypot"
      style={{ position: "absolute", left: "-5000px" }}
    >
      <input
        type="text"
        name={MAILCHIMP_HONEYPOT_NAME}
        tabIndex={-1}
        defaultValue=""
        autoComplete="off"
      />
    </div>
  );
}
