require 'rails_helper'

RSpec.describe Task, type: :model do
  describe 'content' do
    context '空白のとき' do
      it 'valid でないこと' do
        task = Task.new(content: '', status: 0)
        task.valid?
        expect(task.errors[:content]).to be_present
      end
    end
  end
end
