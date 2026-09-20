import Title from "./UI/Title";

export default function About() {

  const text1 =  (
  <>
    ЮНИТ — первое межвузовское ИТ-объединение на Урале.
    <br />
    <br />
    В ЮНИТ собрались единомышленники из самых разных сфер: от разработки
    и дизайна цифровых продуктов, до фотографии и работы в пиар-отделе объединения.
  </>
)

const text2 = (
    <>
    Филиалы ЮНИТ есть в УрФУ и УрГЭУ, ведущих вузах Екатеринбурга. Но стать частью объединения может любой студент, даже из других городов!
    </>
)

    return(
        <div className="">
            <Title title="Кто мы такие"/>
            <div className="flex flex-col">
                <div className="bg-[#5c5c5c]">
                    <div className="">{text1}</div>
                    
                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}