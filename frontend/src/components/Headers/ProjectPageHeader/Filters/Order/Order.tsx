import { SortValue } from "../Filters"
import { AscDesc } from "./AscDesc"
import { Status } from "./Status"

type Props = {
    sort: SortValue,
    setSort: (value: SortValue) => void
}

export function Order({ sort, setSort }: Props) {
    return (
        sort.field !== 'status'
            ? <AscDesc setSort={setSort} sort={sort} />
            : <Status setSort={setSort} sort={sort} />
    )
}