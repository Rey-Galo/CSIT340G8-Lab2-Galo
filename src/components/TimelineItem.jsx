


function TimelineItem({ period, title, place, description }) {
    return (
        <div>
            <p class="text-sm text-stone-500">{period}</p>
            <h3 class="mt-1 font-semibold">{title}</h3>
            <p class="text-sm text-stone-600">{place}</p>
            <p class="mt-2 text-sm leading-relaxed text-stone-600">
                {description}
            </p>
        </div>
    );
}


export default TimelineItem;