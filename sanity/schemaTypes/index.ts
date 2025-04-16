import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { startup } from './startup'
import {playlist} from './playlist'

export const schemaTypes: SchemaTypeDefinition[] = [author, startup, playlist]
