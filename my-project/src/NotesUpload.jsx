export default function NotesUpload() {

    return (
        <>
        <div className="w-4/5 h-24  text-center mx-auto mb-8 text-amber-200 font-bold" id="NotesView">
            <h1 className = "text-7xl">Notes Upload</h1>
        </div>
        <div className = "text-center pb-20">
            <form  method="post" action="upload.php" enctype="multipart/form-data">
                
                <label for="file" className = "w-4/5 h-24  text-center mx-auto mb-8 text-amber-200 font-bold text-2xl py-10">Upload your notes here and view notes from your peers below!</label>
                <label class="block">
                    <input id="file" name="file[]" type="file" multiple="multiple" class="my-10 text-1xl text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-1xl file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-300
                    "/>
                </label>

                <input id = "submit"  type="submit" name="submit" value="Upload" hidden/>
                
                <label class="mr-4 py-5 px-20 
                rounded-full border-0
                text-2xl font-semibold
                bg-violet-50 text-violet-900
                hover:bg-violet-300" for="submit">Submit</label>

            </form>

        <br></br>
        </div>

        </>
    )
}



