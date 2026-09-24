import { GetProject } from "@/types/project";

export function Technologies({ obj }: { obj: GetProject }) {
    return (
        <div className='flex items-center gap-x-[10px] mt-[20px]'>
            <div className='text-white'>Список технологий проекта:</div>
            <div className='flex  gap-x-[10px] gap-y-[10px] items-center flex-wrap w-[800px]'>
                {
                    obj.technologies.map((obj, index) => {
                        return (
                            <div key={index} className="py-[2px] px-[15px] rounded-2xl text-[16px]"
                                style={{
                                    backgroundColor: obj.bgColor ?? 'black',
                                    color: obj.colorText ?? 'white'
                                }}>
                                {obj.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}