


function ContactLink({ label, href, text }) {
    return (
        <li>
            <span class="inline-block w-24 text-sm text-stone-500">{label}</span>
            <a href={href} class="font-medium hover:underline">
                {text}
            </a>
        </li>
    );
}

export default ContactLink;