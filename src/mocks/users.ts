import Urls from "constants/Urls";
import { rest } from "msw";

const handlers = [
    rest.get(Urls.user(1), (req, res, ctx) => {
        return res(
            ctx.json({
                id: 1,
                name: 'Гудзикевич Максим',
                login: 'MasterMax',
                isLeader: true,
            })
        )
    })
]

export default handlers