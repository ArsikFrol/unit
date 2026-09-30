import { SortValue } from "../Filters"
import { AscDesc } from "./AscDesc"
import { Status } from "./Status"
import { Technologies } from "./Technologies/Technologies"

type Props = {
    sort: SortValue,
    setSort: (value: SortValue) => void
}

export function Order({ sort, setSort }: Props) {
        switch (sort.field) {
            case 'status': return <Status setSort={setSort} sort={sort} />
            case 'endOfDevelopment':
            case 'startOfDevelopment': return <AscDesc setSort={setSort} sort={sort} />
            case 'technologies': return <Technologies setSort={setSort} sort={sort}  />
            default: return null
        }
}