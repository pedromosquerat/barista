# Filter field

<ba-ux-snippet name="filter-field-intro"></ba-ux-snippet>

<ba-live-example name="DtExampleFilterFieldDefault"></ba-live-example>

## Imports

You have to import the `DtFilterFieldModule` when you want to use the
`dt-filter-field`.

```typescript
@NgModule({
  imports: [DtFilterFieldModule],
})
class MyModule {}
```

## Inputs

| Name                  | Type                      | Default                                   | Description                                                                                                      |
| --------------------- | ------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `dataSource`          | `DtFilterFieldDataSource` |                                           | Provide a DataSource to feed data to the filter-field. This input is mandatory.                                  |
| `filters`             | `any[][]`                 |                                           | The currently selected filters. This input can also be used to programmatically add filters to the filter-field. |
| `label`               | `string`                  |                                           | The label for the input field. Can be set to something like "Filter by".                                         |
| `loading`             | `boolean`                 | `false`                                   | Whether the filter-field is loading data and should show a loading spinner.                                      |
| `disabled`            | `boolean`                 | `false`                                   | Whether the filter-field is disabled.                                                                            |
| `aria-label`          | `string`                  |                                           | Sets the value for the Aria-Label attribute.                                                                     |
| `customTagParser`     | `TagParserFunction`       | `defaultTagDataForFilterValuesParser`     | A function to override the default or injected configuration for tag parsing.                                    |
| `customEditionParser` | `EditionParserFunction`   | `defaultEditionDataForFilterValuesParser` | A function to override the default or injected configuration for edition parsing text.                           |

_Note: Check out the [Data source](components/filter-field#data-source) section
to understand how to provide the correct data structure for the filter-field._

## Outputs

| Name                     | Type                                                  | Description                                                                                                              |
| ------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `filterChanges`          | `EventEmitter<DtFilterFieldChangeEvent>`              | Event emitted when filters have been added or removed.                                                                   |
| `currentFilterChanges`   | `EventEmitter<DtFilterFieldCurrentFilterChangeEvent>` | Event emitted when a part has been added to the currently selected filter (the filter the user is currently working on). |
| `inputChange`            | `EventEmitter<string>`                                | Event emitted when the input value changes (e.g. when the user is typing).                                               |
| `interactionStateChange` | `EventEmitter<boolean>`                               | Event emitted when the interaction state changes (e.g. when the user interactes with the filter-field).                  |

## Properties

| Name               | Type                             | Description                                                       |
| ------------------ | -------------------------------- | ----------------------------------------------------------------- |
| `currentTags`      | `Observable<DtFilterFieldTag[]>` | A stream that emits the current tags that the filter field holds. |
| `interactionState` | `boolean`                        | Whether the filter-field is being interacted with or not          |

## Methods

| Name                             | Return value               | Description                                                                  |
| -------------------------------- | -------------------------- | ---------------------------------------------------------------------------- |
| `getTagForFilter(needle: any[])` | `DtFilterFieldTag \| null` | Returns a `DtFilterFieldTag` if one can be found for the given filter needle |
| `focus`                          | `void`                     | Focuses the filter field                                                     |

## Distinct options

Usually all options of an autocomplete can be selected, but sometimes there is
the need to remove the whole list of options once one of them is selected (e.g.
when you only want the user to select one city of a full list).

You can do that by setting the `distinct: true` property onto the autocomplete
object.

<ba-live-example name="DtExampleFilterFieldDistinct"></ba-live-example>

## Loading options asynchronously

When working with huge sets of data, there is often the need to load parts of it
asynchronously when the user needs it. You can do this by setting the
`async: true` property on the autocomplete instead of options, then load the
data and apply it to the data source.

<ba-live-example name="DtExampleFilterFieldAsync"></ba-live-example>

## Server side filtered partial options

When loading data asynchronously, there might be the need to filter the options
on the server side, as there simply are too many options to return at once. You
can do this by initially setting the `async: true` property. For every response
you get with the server side filtered data, you need to set the `partial: true`
property, when replacing the datasource with the partially loaded data.

<ba-live-example name="DtExampleFilterFieldPartial"></ba-live-example>

## Unique free-text, range or multiselect options

It is possible to set a free-text or range option to be unique. So it can only
be added once regardless of the value the user added to the input field.

Multiselection is unique by default.

<ba-live-example name="DtExampleFilterFieldUnique"></ba-live-example>

## Default search

To optimize frequently used labels e.g. `Name`, set a default search option
(defaultSearch) in your dataSource like shown in the example below. The
defaultSearch option can then be used similar to a free-text but not quite.
Instead of selecting a label and then typing, just type the preferred tag e.g
`Errors` and the filter field will be combine the defaultSearch option name
(`name: 'Name'`) attribute and the typed text automatically resulting in
`Name: Errors`.

Type anything while no label is selected to see the Default Search in action.

<ba-live-example name="DtExampleFilterFieldDefaultSearch"></ba-live-example>

## Filters

Every filter is an array of:

- Key-value filters: objects that have been selected via an autocomplete (the
  object is exactly the one the consumer has provided via the data source). The
  suggested items can also be refined by typing.
- Free-text filters: strings that the user has typed in via a free text.
- Range filters: objects that include the result of a range selected by the
  user. This includes the range operator (`DtFilterFieldRangeOperator`), the
  unit (`string`) of the selected values and the range itself (which can either
  be one `number` value or a `number` tuple).
- Multi select filters: array of objects that have been selected via a multi
  select list with checkboxes (the objects are exactly the ones the consumer has
  provided via the data source). The suggested items can also be refined by
  typing.

### Receiving the selected filters

Two outputs on the filter-field help you receiving the filters when:

- A filter has been added or removed - `filterChanges`.
- A part of a filter has been added or removed (a filter has been edited) -
  `currentFilterChanges`.

#### `filterChanges`

This stream emits when a new filter has been added to the current filter list or
an existing one has been removed. The event emitted is an instance of
`DtFilterFieldChangeEvent` which includes the following properties:

- `source`: The instance of the filter-field that emitted this event.
- `added`: An array of filters that have been added.
- `filters` The full list of the selected filters including the added ones.

#### `currentFilterChanges`

This stream emits an event when a filter is edited which means new parts have
been added or removed. The emitted event is an instance of
`DtFilterFieldCurrentFilterChangeEvent` which includes the following properties:

- `source`: The instance of the filter-field that emitted this event.
- `added`: The array of parts that have been added to the filter.
- `removed`: The array of parts that have been removed from the filter.
- `currentFilter`: The current filter (list of parts) that has been edited.
- `filters` The full list of the selected filters including the one that has
  been edited.

### Adding filters programmatically

To set filters programmatically, the filter-field has a `filters` input. Assign
the filters you want to set to this property. Be aware, setting the filters will
override all the currently selected ones.

<ba-live-example name="DtExampleFilterFieldProgrammaticFilters"></ba-live-example>

## Data source

The filter-field needs a `DtFilterFieldDataSource` so data can be applied. The
main purpose of the data source is to convert the data that should be fed into
the filter-field into a form the filter-field can understand.

_Note: Provide only one data source instance per filter-field._

A `DataSource` needs to be a class that implements the `DtFilterFieldDataSource`
interface.

The filter-field provides a default implementation of a `DataSource`, named
`DtFilterFieldDefaultDataSource`, that takes a specific form of data
(`DtFilterFieldDefaultDataSourceType`). The filter-field supports many layers of
nesting for autocomplete nodes. You can have as many autocomplete nodes nested
as you need. E.g. Having "continent > country > region > city" as 3 layers of
autocomplete works perfectly fine. Nodes that can only be leaf nodes are
free-text, range and options.

<ba-live-example name="DtExampleFilterFieldInfiniteDataDepth"></ba-live-example>

If your data has a different structure create your own custom data source. When
creating a custom data source, we also provide a lot of utility functions for
converting and creating data into the form of definition node objects the
filter-field can understand. You can also take a look at the implementation of
the `DtFilterFieldDefaultDataSource` to get a better understanding on how to
create a custom data source.

### Data utility functions

A list of the most useful utility functions for creating and checking definition
node objects:

| Name                  | Description                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `dtAutocompleteDef`   | Creates a node definition object or extends one and applies an autocomplete definition object based on the parameters. |
| `isDtAutocompleteDef` | Whether the provided definition object is of type `NodeDef` and consists of an autocomplete definition.                |
| `dtFreeTextDef`       | Creates a node definition object or extends one and applies a free-text definition object based on the parameters.     |
| `isDtFreeTextDef`     | Whether the provided definition object is of type `NodeDef` and consists of a free-text definition.                    |
| `dtOptionDef`         | Creates a node definition object or extends one and applies an option definition object based on the parameters.       |
| `isDtOptionDef`       | Whether the provided definition object is of type `NodeDef` and consists of an option definition.                      |
| `dtGroupDef`          | Creates a node definition object or extends one and applies a group definition object based on the parameters.         |
| `isDtGroupDef`        | Whether the provided definition object is of type `NodeDef` and consists of a group definition.                        |
| `dtMultiSelectDef`    | Creates a node definition object or extends one and applies a multi select definition object based on the parameters.  |
| `isDtMultiSelectDef`  | Whether the provided definition object is of type `NodeDef` and consists of a multi select definition.                 |

## Behavior

<ba-ux-snippet name="filter-field-behavior"></ba-ux-snippet>

### Multi selection of filter values

Multi select lets users choose more than one value for the same field. The
result is an array of the same objects the user has passed in the data source.

<ba-live-example name="DtExampleFilterFieldMultiSelect"></ba-live-example>

### Clear filters

By triggering the `clear all` button, all filters are deleted. This button
appears on focus loss of the filter field. Please also check out this behavior
in the [click dummy](https://invis.io/PCG28RGDUFE).

<ba-live-example name="DtExampleFilterFieldClearall"></ba-live-example>

### Disabled state

By setting the `disabled`-property to true, the whole filter field including all
tags get disabled and therefore cannot be modified by the user.

<ba-live-example name="DtExampleFilterFieldDisabled"></ba-live-example>

### Readonly, non-deletable & non-editable tags

The filter field creates a `DtFilterFieldTag` for each active filter. You can
get subscribed to the list of current tags with the `currentTags` observable. By
using the utility method `getTagForFilter` you can find a `DtFilterFieldTag`
instance created for a given filter. After getting the tag instance for your
filter you can configure the filter to your needs by using the properties
`editable`, `deletable` and `disabled`.

<ba-live-example name="DtExampleFilterFieldReadOnlyTags"></ba-live-example>

### Changing the default parsing of filter values

The filter field exposes a `defaultTagDataForFilterValuesParser` function,
describing how the key:value pairs of each chosen filter should be parsed and
shown. However, this function can be extended and replaced through the
`DT_FILTER_VALUES_PARSER_CONFIG` token, which can be injected in the parent
component and assigned a function of your own. In addition, this token can also
be overriden with an input function specific to the component using that filter
instance.

<ba-live-example name="DtExampleFilterFieldCustomParser"></ba-live-example>

### Changing the default parsing of filter edition placeholder

The filter field exposes a `defaultEditionDataForFilterValuesParser` function,
describing how the placehoder during selection should be parsed. However, this
function can be extended and replaced through the
`DT_FILTER_EDITION_VALUES_PARSER_CONFIG` token, which can be injected in the
parent component and assigned a function of your own. In addition, this token
can also be overriden with an input function specific to the component using
that filter instance.

<ba-live-example name="DtExampleFilterFieldCustomPlaceholder"></ba-live-example>

### Validators

Handling the user input with validators provides you with control over input
requirements. E.g `Validators.required`  
Angular exports a list of validators out of the box, as shown in the following
example, but you can also create custom validators that need to conform to the
angular validator interface.
[Angular Form validators](https://angular.io/guide/form-validation#custom-validators)

<ba-live-example name="DtExampleFilterFieldValidator"></ba-live-example>

### Handling operators (not yet implemented)

<ba-ux-snippet name="filter-field-operators"></ba-ux-snippet>

### Help and errors (not yet implemented)

<ba-ux-snippet name="filter-field-validation"></ba-ux-snippet>
