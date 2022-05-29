import { PartialType } from '@nestjs/mapped-types';
import { CreateRequerimientoDto } from './create-requerimiento.dto';

export class UpdateRequerimientoDto extends PartialType(CreateRequerimientoDto) {}
