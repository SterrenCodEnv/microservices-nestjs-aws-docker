import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({ summary: 'Create  user' })
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all users' })
  findAll() {
    return this.userService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Search user' })
  search(@Query() data: any) {
    return this.userService.search(data);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find user by id' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.userService.update(id, userDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
