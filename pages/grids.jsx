import glamorous from 'glamorous';
import { css } from 'glamor';

export const Grid = glamorous.div(({ rows = 1, columns = 1, columnGap = '10px', rowGap = '10px' }) =>({
    background: 'rgb(206, 204, 204)',
    display: ['-ms-grid', 'grid'],

    MsGridColumns: `1fr (${ columnGap } 1fr)[${ columns - 1 }]`,
    MsGridRows: `1fr (${ rowGap } 1fr)[${ rows - 1 }]`,

    gridTemplateColumns: `repeat(${ rows }, 1fr)`,
    gridTemplateRows: `repeat(${ columns }, 1fr)`,
    gridColumnGap: columnGap,
    gridRowGap: rowGap
}));

export const GridItem = glamorous.div(
    ({startingColumn = 1, startingRow = 1, columnSpan = 1, rowSpan = 1}) => {
        const gridItemClass = `grid-item-column-${startingColumn}-span-${rowSpan}-row-${startingRow}-span-${rowSpan}`;
        css.insert(`.${gridItemClass} {
            -ms-grid-column: ${startingColumn};
            -ms-grid-column-span: ${columnSpan};
            -ms-grid-row: ${startingRow};
            -ms-grid-row-span: ${rowSpan};
        }`)
        return gridItemClass;
    },
    ({ startingColumn = 1, startingRow = 1, columnSpan = 1, rowSpan = 1 }) => ({
        background: 'rgb(160, 160, 160)',

        gridColumn: `${startingColumn} / span ${columnSpan}`,
        gridRow: `${startingRow} / span ${rowSpan}`,
    })
);
