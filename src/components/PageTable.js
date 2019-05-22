import { createElement } from '../utils/renderer'
import PageBody from './PageBody'

class PageTable{
    constructor(posLeft, table){
        this.posLeft = posLeft
        this.table = table
    }

    render(){
        let tableRows = []
        for(let i = 0; i < this.table.cells.length; ++i){
            let tableCols = []
            let row = this.table.cells[i]
            for(let j = 0; j < row.length; ++j){
                let col = row[j]

                let pageBody = new PageBody(0, col)
                let pageBodyEl = pageBody.render()
                console.log(col)
                let tableCol = createElement('td', {
                    class: 'page-table-col',
                    style: {
                        position: 'relative',
                        width: col.doc.grid.pageWidth+'px',
                        height: pageBody.bodyHeight+'px',
                        border: '1px solid #333',
                    }
                }, [pageBodyEl])

                tableCols.push(tableCol)
            }

            let tableRow = createElement('tr', {
                class: 'page-table-row',
                style: {

                }
            }, tableCols)

            tableRows.push(tableRow)
        }

        // create table
        this.el =  createElement('table', {
            class: 'page-table',
            attrs: {
                cellpadding: 0,
                cellspacing: 0,
            },
            style: {
                marginLeft: this.posLeft+'px',
                borderCollapse: 'collapse',
            }
        }, tableRows)

        return this.el
    }
}

export default PageTable