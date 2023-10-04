"""
Add teacher_id column to students

Revision ID: 0d84aeeaf65c
Revises: 3b2059dc49fd
Create Date: 2023-10-04 09:57:59.918838

"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '0d84aeeaf65c'
down_revision = '3b2059dc49fd'
branch_labels = None
depends_on = None

def upgrade():
    # Add the teacher_id column to students
    with op.batch_alter_table('students') as batch_op:
        batch_op.add_column(sa.Column('teacher_id', sa.Integer, sa.ForeignKey('teachers.id'), nullable=True))

def downgrade():
    # Remove the teacher_id column from students
    with op.batch_alter_table('students') as batch_op:
        batch_op.drop_column('teacher_id')
