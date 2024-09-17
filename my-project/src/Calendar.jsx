
export default function Calendar() {
    return (
        <>
            <div class="grid grid-cols-1 grid-rows-5 w-4/5 h-screen m-auto mt-10">

                <div class="row-span-1 flex items-center justify-center w-auto">
                    <h1 class="text-7xl col-span-2 text-cus-gold font-bold">Calendar</h1>
                </div>

                <div class="row-span-4">
                    <iframe class="w-full h-full border-10 border-4 border-dashed border-cus-gold"
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&showTitle=0&showTz=0&showCalendars=0&showPrint=0&src=MjY3ZjI1YzEzYzAzMGEzNTVkYTg0NmM1NDg3YWZlNjYwMTk1MGM0OTljZjU2ZDkzZmUxNWNmZGM0MzlkMTJhMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5"></iframe>
                </div>
            </div>



        </>
    )
}


