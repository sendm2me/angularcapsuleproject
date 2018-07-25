import { TaskManagerCapsuleProjectPage } from './app.po';

describe('task-manager-capsule-project App', function() {
  let page: TaskManagerCapsuleProjectPage;

  beforeEach(() => {
    page = new TaskManagerCapsuleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
